export type Example = {
    message: string
    pageA: SubPageData
    pageB: SubPageData
}

export type SubPageData = {
    isDisp: boolean
    message: string
    groups: Group[]
}

export type Group = {
    name: string
    members: Member[]
}

export type Member = {
    id: string
    name: string
}