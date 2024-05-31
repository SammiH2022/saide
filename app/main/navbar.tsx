import TopMenuIcon from '../../components/menuIcon';

export default function Navbar() {

    // TODO: Add navigate to icons when more pages are done.

    const barsIcon = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    const plusIcon = "M12 4.5v15m7.5-7.5h-15"
    const bellIcon = "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
    const questionMarkIcon = "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"

    return (
        <nav className="z-50 bg-slate-800 border-b border-b-zinc-700">
            <div className="h-10vh flex lg:py-5 px-10 py-20">
                <div className="flex items-center flex-1">
                    <TopMenuIcon item={barsIcon} />
                </div>
                <div>
                    <ul className="flex gap-8">
                        <TopMenuIcon item={plusIcon} />
                        <TopMenuIcon item={bellIcon} />
                        <TopMenuIcon item={questionMarkIcon} />
                    </ul>
                </div>
            </div>
        </nav>
    )
}
