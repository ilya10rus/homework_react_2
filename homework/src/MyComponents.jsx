import { useState } from 'react';
import styles from './App.module.css';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const MyComponent = () => {
	return (
		<div className={styles.calc} key={Math.random()}>
			<div className={styles.display}>{}</div>
			{numbers.map((num) => (
				<a className={styles.calcNum} key={Math.random()}>
					{num}
				</a>
			))}
			<a className={styles.calcNum}>+</a>
			<a className={styles.calcNum}>-</a>
			<a className={styles.calcNum}>=</a>
			<a className={styles.calcNum}>C</a>
		</div>
	);
};
