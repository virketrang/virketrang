import Image from 'next/image'

import Denmark from '@/liedecke-noergaard/public/icons/denmark.png'
import UnitedKingdom from '@/liedecke-noergaard/public/icons/united-kingdom.png'

import LocaleFlagComponent from './locale-flag.types'
import styles from './locale-flag.module.scss'

const LocaleFlag: LocaleFlagComponent = memo(({ locale }) => {
    switch (locale) {
        case 'da-DK':
            return (
                <Image
                    className={styles.flag}
                    src={Denmark.src}
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt="Det danske flag"
                />
            )
        case 'en-GB':
            return (
                <Image
                    className={styles.flag}
                    src={UnitedKingdom.src}
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt="Det britiske flag"
                />
            )
        default:
            throw Error('Unknown locale: could not get flag from locale')
    }
})

LocaleFlag.displayName = 'LocaleFlag'

export default LocaleFlag
