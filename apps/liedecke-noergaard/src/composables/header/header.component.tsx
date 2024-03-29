import { Logo, MenuButton, Navigation, CartButton } from '@/liedecke-noergaard/components'

import HeaderComponent from './header.types'
import styles from './header.module.scss'

const Header: HeaderComponent = memo(({ dictionary }) => {
    return (
        <header className={styles.header}>
            <MenuButton />
            <Logo className={styles.logo} href="" />
            <Navigation dictionary={dictionary} />
            <CartButton />
        </header>
    )
})

Header.displayName = 'Header'

export default memo(Header)
