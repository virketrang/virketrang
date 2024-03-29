import { Dictionary } from '@/liedecke-noergaard/types'

type ProductListComponent = FunctionComponent<{
    dictionaries: { filter: Dictionary<'filter'>; product: Dictionary<'product'>; currency: Dictionary<'currency'> }
    products: Entity.Product[]
    divisions: Entity.Division[]
    locale: I18N.Locale
}>

export default ProductListComponent
