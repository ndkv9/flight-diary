import diaries from '../../data/diaries';
import { DiaryEntry, NonSensitiveEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
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

const addEntry = () => {
	return [];
};

export default {
	getEntries,
	addEntry,
	getNonSensitiveEntries,
};
