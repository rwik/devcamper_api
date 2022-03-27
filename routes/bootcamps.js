
import Express from "express";
const router = Express.Router();



router.get('/', (req, res) => {
    res.status(200).json({'status': 'Success'});
});
router.get('/:id', (req, res) => {
    res.status(200).json({'status': 'Success'});
});
router.post('/bootcamps', (req, res) => {
    res.status(200).json({'status': 'Success'});
});
router.put('/bootcamps/:id', (req, res) => {
    res.status(200).json({'status': 'Success'});
});
router.delete('/bootcamps/:id', (req, res) => {
    res.status(200).json({'status': 'Success'});
});

export default router;