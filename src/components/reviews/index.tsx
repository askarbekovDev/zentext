'use client';

import React, { useState } from 'react';
import styles from './index.module.scss';
import { ArrowLeft, ArrowRight } from '../../../public';

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  type reviewDataType = {
    feedback: string;
    factory: string;
    grade: string;
  };

  const slides: reviewDataType[] = [
    {
      feedback:
        'Работать с этой фабрикой было настоящим удовольствием! Высокое качество продукции и внимательное отношение к каждому заказу. Вся наша партия была выполнена в срок.',
      factory: 'Швейная фабрика "Элеганс"',
      grade: '5',
    },
    {
      feedback: 'The shortest feedback',
      factory: 'Швейная фабрика "Элеганс"',
      grade: '5',
    },
    {
      feedback:
        'The longest feedback: Работать с этой фабрикой было настоящим удовольствием! Высокое качество продукции и внимательное отношение к каждому заказу. Вся наша партия была выполнена в срок. Работать с этой фабрикой было настоящим удовольствием! Высокое качество продукции и внимательное отношение к каждому заказу. Вся наша партия была выполнена в срок. Работать с этой фабрикой было настоящим удовольствием! Высокое качество продукции и внимательное отношение к каждому заказу. Вся наша партия была выполнена в срок.',
      factory: 'Швейная фабрика "Элеганс"',
      grade: '5',
    },
    {
      feedback:
        'Работать с этой фабрикой было настоящим удовольствием! Высокое качество продукции и внимательное отношение к каждому заказу. Вся наша партия была выполнена в срок.',
      factory: 'Швейная фабрика "Элеганс"',
      grade: '5',
    },
    {
      feedback:
        'Работать с этой фабрикой было настоящим удовольствием! Высокое качество продукции и внимательное отношение к каждому заказу. Вся наша партия была выполнена в срок.',
      factory: 'Швейная фабрика "Элеганс"',
      grade: '5',
    },
  ];

  const groupedSlides = slides.reduce<reviewDataType[][]>(
    (result, slide, index) => {
      const groupIndex = Math.floor(index / 3);
      if (!result[groupIndex]) result[groupIndex] = [];
      result[groupIndex].push(slide);
      return result;
    },
    []
  );

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="container">
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>Отзывы</h1>
        <div className={styles.sliderContainer}>
          <div
            className={styles.slides}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {groupedSlides.map((slide, index) => (
              <div key={index} className={styles.slide}>
                {slide.map((review, idx) => (
                  <div key={idx} className={styles.reviewWrap}>
                    <div className={styles.reviewGrade}>
                      {' ⭐️ '.repeat(+review.grade)}
                    </div>
                    <div className={styles.reviewFeedback}>
                      {review.feedback}
                    </div>
                    <div className={styles.factory}>{review.factory}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.btnWrap}>
          <button
            className={`${styles.arrow} ${styles.prev}`}
            onClick={handlePrev}
            disabled={!currentIndex}
          >
            <ArrowLeft disabled={!currentIndex} />
          </button>
          <button
            className={`${styles.arrow} ${styles.next}`}
            onClick={handleNext}
            disabled={currentIndex === Math.ceil(slides.length / 3) - 1}
          >
            <ArrowRight
              disabled={currentIndex === Math.ceil(slides.length / 3) - 1}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
