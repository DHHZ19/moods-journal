import { OpenAI } from "langchain/llms/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import z from "zod";

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
        "a hexadecimal color code the represents the mood of the entry. Example #ffff11 for yellow representing happiness."
      ),
  })
);
export const analyze = async (prompt) => {
  const model = new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });
  const result = await model.call(prompt);
  console.log(result);
};
