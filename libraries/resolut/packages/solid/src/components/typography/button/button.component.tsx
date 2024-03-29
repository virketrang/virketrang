import Typography from '../typography/typography.component'

const Button: Resolut.Component<Resolut.Component.ButtonProps> = ({
    square,
    circle,
    round,
    rounded,
    submit,
    small,
    medium,
    large,
    elevated,
    children,
    wide,
    ref,
    ...props
}) => {
    return (
        <Typography
            ref={ref}
            tag="button"
            element={props.href ? 'a' : 'button'}
            {...Utils.setAttributes({
                shape: Utils.setValueFromBoolean({ circle, square, round, rounded }),
                size: Utils.setValueFromBoolean({ small, medium, large }) || 'large',
                elevated,
                wide
            })}
            {...props}
        >
            {children}
        </Typography>
    )
}

export default Button
