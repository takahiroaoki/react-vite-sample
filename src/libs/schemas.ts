export type Example = {
    message: string
    pageA: SubPage
    pageB: SubPage
}

export type SubPage = {
    isDisp: boolean
    message: string
}