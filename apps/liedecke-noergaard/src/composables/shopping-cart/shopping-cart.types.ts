import { Dictionary } from '@/liedecke-noergaard/types'

type ShoppingCartComponent = FunctionComponent<{
    dictionaries: { shoppingCart: Dictionary<'shoppingCart'>; currency: Dictionary<'currency'> }
    locale: I18N.Locale
}>

export default ShoppingCartComponent
