import express from 'express';
import diaryService from '../services/diaryService';
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

router.post('/', (_req, res) => {
	res.send('Saving a diary!');
});

export default router;
