import express from 'express';
import diaryService from '../services/diaryService';
import toNewDiaryEntry from '../utils';
const router = express.Router();

router.get('/', (_req, res) => {
	res.send(diaryService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
	const diary = diaryService.findById(Number(req.params.id));
	if (!diary) {
		res.status(404).end();
	}

	res.send(diary);
});

router.post('/', (req, res) => {
	try {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const newEntry = toNewDiaryEntry(req.body);
		const addedEntry = diaryService.addEntry(newEntry);
		res.json(addedEntry);
	} catch (err) {
		res.status(400).send(err.message);
	}
});

export default router;
