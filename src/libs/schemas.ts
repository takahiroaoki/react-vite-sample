export type Example = {
    message: string
    pageA: SubPage
    pageB: SubPage
}

export type SubPage = {
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