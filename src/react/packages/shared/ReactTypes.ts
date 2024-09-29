
export type Ref = any
export type Props = any
export type ElementType = any
export type Key = any
export type Action<State> = State | ((prevState: State) => State)

export interface ReactElementType {
    /** 元素类型 */
    $$typeof: symbol | number;

    type: ElementType

    // for 循环遍历的key 不加默认index
    key: Key

    // 组件props
    props: Props

    // 组件ref
    ref: Ref

    // fiberNode
    __owner: any

    // 我们标记的特殊符号
    __mark: string
}

















































