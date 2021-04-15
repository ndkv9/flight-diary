import diaries from '../../data/diaries';
import { DiaryEntry, NonSensitiveEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
	return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveEntry[] => {
	return diaries.map(({ id, date, weather, visibility }) => ({
		id,
		date,
		weather,
		visibility,
	}));
};

const findById = (id: number): DiaryEntry | undefined => {
	const entry = diaries.find(diary => diary.id === id);
	return entry;
};

const addEntry = () => {
	return [];
};

export default {
	getEntries,
	addEntry,
	getNonSensitiveEntries,
	findById,
};
