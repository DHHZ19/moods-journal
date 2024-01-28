import { UserButton } from '@clerk/nextJs'

const DashboardLayout = ( {children} ) => {
    return <div className="h-screen w-screen relative">
        <aside className="absolute w-48 top-0 left-0 h-full border-r border-r-black/10">
            mood
        </aside>
        <div className="ml-[200px]">
            <header className="h-16 border-b border-black/10"><div className="h-full w-full pr-6 flex items-center justify-end"> <UserButton/></div></header>
            <div>{children}</div>
        </div>
        </div>
}
export default DashboardLayout;