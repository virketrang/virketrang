import Layout from '../layout/layout.component'

const Body: Resolut.Component<Resolut.Component.BodyProps> = ({ children, ref, ...props }) => {
    return (
        <Layout {...props} ref={ref} element="body" tag="body">
            {children}
        </Layout>
    )
}

export default Body
