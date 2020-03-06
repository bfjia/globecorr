declare module '*.htm' {
    const content: string;
    export default content;
}

declare module '*.json' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content: any;
    export default content;
}
