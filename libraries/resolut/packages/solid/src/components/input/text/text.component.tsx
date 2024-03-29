import Input from '../input/input.component'

const Text: Resolut.Component<Resolut.Component.TextProps> = ({ email, password, tel, number, url, ref, ...props }) => {
    return (
        <Input
            tag="text"
            element="input"
            type={Utils.setValueFromBoolean({ email, password, tel, number, url }) || 'text'}
            ref={ref}
            {...props}
        />
    )
}

export default Text
