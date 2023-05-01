'use client';
import Image from 'next/image';
import styles from './page.module.sass';

import { Carousel, Slide } from '@resolut/client';

export default async function Page({ params }: { params: { id: number } }) {
    return (
        <div className={styles.subpage}>
            <Carousel>
                <Slide>
                    <Image
                        draggable="false"
                        src="/assets/products/confecture/confecture-1.webp"
                        alt="confecture 1"
                        fill
                    />
                </Slide>
                <Slide>
                    <Image
                        draggable="false"
                        src="/assets/products/confecture/confecture-2.webp"
                        alt="confecture 2"
                        fill
                    />
                </Slide>
                <Slide>
                    <Image
                        draggable="false"
                        src="/assets/products/confecture/confecture-3.webp"
                        alt="confecture 3"
                        fill
                    />
                </Slide>
            </Carousel>
        </div>
    );
}