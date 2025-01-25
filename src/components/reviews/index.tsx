'use client';

import React, { useState } from 'react';
import styles from './index.module.scss';

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: {}[] = [
    {
      feedback:
        'Работать с этой фабрикой было настоящим удовольствием! Высокое качество продукции и внимательное отношение к каждому заказу. Вся наша партия была выполнена в срок.',
      factory: 'Швейная фабрика "Элеганс',
      grade: '5'
    },
    {
      feedback:
        'Работать с этой фабрикой было настоящим удовольствием! Высокое качество продукции и внимательное отношение к каждому заказу. Вся наша партия была выполнена в срок.',
      factory: 'Швейная фабрика "Элеганс',
      grade: '5'
    },
    {
      feedback:
        'Работать с этой фабрикой было настоящим удовольствием! Высокое качество продукции и внимательное отношение к каждому заказу. Вся наша партия была выполнена в срок.',
      factory: 'Швейная фабрика "Элеганс',
      grade: '5'
    },
    {
      feedback:
        'Работать с этой фабрикой было настоящим удовольствием! Высокое качество продукции и внимательное отношение к каждому заказу. Вся наша партия была выполнена в срок.',
      factory: 'Швейная фабрика "Элеганс',
      grade: '5'
    },
  ];

  const groupedSlides = slides.reduce<{}[][]>((result, slide, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!result[groupIndex]) result[groupIndex] = [];
    result[groupIndex].push(slide);
    return result;
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="container">
      <h1 className={styles.mainTitle}>Отзывы</h1>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          <div
            className={styles.slides}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {groupedSlides.map((slide, index) => (
              <div key={index} className={styles.slide}>
                {/* {slide} */}yeye
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.btnWrap}>
        <button
          className={`${styles.arrow} ${styles.prev}`}
          onClick={handlePrev}
          disabled={!currentIndex}
        >
          ❮
        </button>
        <button
          className={`${styles.arrow} ${styles.next}`}
          onClick={handleNext}
          disabled={currentIndex === Math.ceil(slides.length / 3) - 1}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
