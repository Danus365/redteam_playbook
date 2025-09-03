import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageSrc?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Coverage',
    imageSrc: '/img/red_globe.png',
    description: (
      <>
        This playbook covers the complete AI red teaming methodology,
        from reconnaissance to exploitation techniques.
      </>
    ),
  },
  {
    title: 'Practical Guidance',
    imageSrc: '/img/red_book.png',
    description: (
      <>
        Focus on actionable techniques and real-world scenarios.
        Each section provides hands-on examples you can apply immediately.
      </>
    ),
  },
  {
    title: 'Expert-Driven',
    imageSrc: '/img/hacker.png',
    description: (
      <>
        Developed by Pillar Security's expert team based on extensive
        experience in AI security and red teaming operations.
      </>
    ),
  },
];

function Feature({title, imageSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={`${title} - Pillar Security`}
            className={styles.featureSvg}
            role="img" 
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
