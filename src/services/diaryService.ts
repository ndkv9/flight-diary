import diaries from '../../data/diaries';
import { DiaryEntry, NonSensitiveEntry, NewDiaryEntry } from '../types';

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

const addEntry = (entry: NewDiaryEntry): DiaryEntry => {
	const newDiaryEntry = {
		id: Math.max(...diaries.map(d => d.id)) + 1,
		...entry,
	};

	diaries.push(newDiaryEntry);
	return newDiaryEntry;
};

export default {
	getEntries,
	addEntry,
	getNonSensitiveEntries,
	findById,
};
