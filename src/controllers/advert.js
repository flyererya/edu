import Advert from '../models/advert';
import formidable from 'formidable';
import path from 'path';

//增
export function advertAdd(req, res) {
	const form = new formidable.IncomingForm();
 
	form.uploadDir = path.join(__dirname,'../../public/uploads');

	form.keepExtensions = true;

	form.parse(req, function(err, fields, files) {
		
		const body = fields;
		body.image = path.basename(files.image.path);

		const advert = new Advert({
			title: body.title,
			image: body.image,
			link: body.link,
			start_time: body.start_time,
			end_time: body.end_time,
		});

		advert.save((err, result) =>{
			if (err) {
				return console.log(err);
			}
			res.json({
				err_code: 0
			});
		});
	});
	
}

//查所有
export function advertQueryAll(req, res){
	Advert.find((err, docs) =>{
		if (err) {
			console.log(err);
		}
		res.json({
			err_code: 0,
			result: docs
		});
	});
}

//查一个
export function advertQueryOne(req, res){
	Advert.findById(req.params.adverId, (err, result) =>{
		if (err) {  return console.log(err) }
		res.json({
			err_code: 0,
			result: result
		});
	});
}

//改
export function advertEdit(req, res){
	Advert.findById(req.body.id, (err, advert) =>{
		if (err) { return console.log(err); }
		const body = req.body;
		advert.title = body.title;
		advert.image = body.image;
		advert.link = body.link;
		advert.start_time = body.start_time;
		advert.end_time = body.end_time;
		advert.last_modified = new Date();

		advert.save( (err, result) =>{
			if (err) {
				return console.log(err);
			}
			res.json({
				err_code: 0
			});
		});
	
	});
}


//删
export function advertRemoveOne(req, res){
	Advert.remove({_id: req.params.adverId }, err => {
		if (err) { return console.log(err) }
		res.json({
			err_code: 0
		});
	})
}

//展示页面
export function showAdvertList(req, res){
	res.render('advert_list.html');
}

//展示广告添加页面
export function showAdvertAdd(req, res){
	res.render('advert_add.html'); 
}













