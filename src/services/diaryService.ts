import diaryData from '../../data/diaries.json';

const getEntries = () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return diaryData;
};

const addEntry = () => {
	return null;
};

export default {
	getEntries,
	addEntry,
};
