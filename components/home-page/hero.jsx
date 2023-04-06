import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/gabriel.jpg"
                    alt="An image showing Gabriel"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Gabriel</h1>
            <p>I blog about web development and technology.</p>
        </section>
    )
}

export default Hero;