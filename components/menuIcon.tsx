type Props = {
    item: string
}

export default function TopMenuIcon(props: Props) {

    const item = props.item

    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d={item} />
    </svg>
}

export function SideMenuIcon(props: Props) {

    const item = props.item

    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d={item} />
    </svg>
}