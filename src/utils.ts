import { NewDiaryEntry, Visibility, Weather } from './types';

type Fields = {
	comment: unknown;
	date: unknown;
	weather: unknown;
	visibility: unknown;
};

const toNewDiaryEntry = ({
	comment,
	date,
	weather,
	visibility,
}: Fields): NewDiaryEntry => {
	const newEntry: NewDiaryEntry = {
		comment: parseComment(comment),
		date: parseDate(date),
		weather: parseWeather(weather),
		visibility: parseVisibility(visibility),
	};

	return newEntry;
};

const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};

const parseComment = (comment: unknown): string => {
	if (!comment || !isString(comment)) {
		throw new Error('Invalid or missing comment');
	}

	return comment;
};

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
	if (!date || !isString(date) || !isDate(date)) {
		throw new Error('Invalid or missing date: ' + date);
	}
	return date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isWeather = (para: any): para is Weather => {
	return Object.values(Weather).includes(para);
};

const parseWeather = (weather: unknown): Weather => {
	if (!weather || !isWeather(weather)) {
		throw new Error('Invalid or missing weather: ' + weather);
	}
	return weather;
};

const isVisibility = (para: any): para is Visibility => {
	return Object.values(Visibility).includes(para);
};

const parseVisibility = (visibility: unknown): Visibility => {
	if (!visibility || !isVisibility(visibility)) {
		throw new Error('Invalid or missing visibility: ' + visibility);
	}

	return visibility;
};

export default toNewDiaryEntry;
