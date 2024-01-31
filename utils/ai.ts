import { OpenAI } from "langchain/llms/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import z from "zod";
import { PromptTemplate } from "langchain/prompts";
const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z
      .string()
      .describe("The mood of the person who wrote the journal entry."),
    summary: z.string().describe("quick summary of the entire entry."),
    negative: z
      .boolean()
      .describe(
        "is the journal entry negative? (i.e. doees it contain negative emotions?)."
      ),
    color: z
      .string()
      .describe(
        "a hexadecimal color code that represents the mood of the entry. Example #ffff11 for yellow representing happiness."
      ),
  })
);

const getPrompt = async (content) => {
  const format_instructions = parser.getFormatInstructions();

  const prompt = new PromptTemplate({
    template:
      "Analyze the following journal entry. Follow the instructions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{entry}",
    inputVariables: ["entry"],
    partialVariables: { format_instructions },
  });

  const input = await prompt.format({
    entry: content,
  });

  console.log(input);
  return input;
};

export const analyze = async (prompt) => {
  const input = await getPrompt(content);
  const model = new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });
  const result = await model.call(prompt);
  console.log(result);
};
