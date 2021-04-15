import diaries from '../../data/diaries';
import { DiaryEntry, NonSensitiveEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveEntry[] => {
	return diaries;
};

const addEntry = () => {
	return null;
};

export default {
	getEntries,
	addEntry,
	getNonSensitiveEntries,
};
