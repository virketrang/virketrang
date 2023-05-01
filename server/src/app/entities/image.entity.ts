import { PrimaryKey, Property, ManyToOne, Entity, Rel } from '@mikro-orm/core';
import Product from './product.entity';

@Entity()
export default class Image {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
    id!: string;

    @Property()
    description!: string;

    @Property()
    url!: string;

    @ManyToOne({ entity: () => Product })
    product!: Rel<Product>;
}