const router = require("express").Router();
const productService = require("./../services/product.service");
const service = new productService();

router.get("/",async (req,res,next)=>{

  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get("/:id",async(req,res,next)=>{

  try {
    const {id} = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post("/",async(req,res,next)=>{

  try {
    const newProduct = await service.create(req.body);
    res.status(201).json({
      message: "created",
      body: newProduct
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id",async(req,res,next)=>{

  try {
    const {id} = req.params;
    const body = req.body;
    const product = await service.updateAll(id,body);
    res.json({
      message: "product updated",
      product
    });
  } catch (error) {
    next(error);
  }

});

router.patch("/:id",async(req,res,next)=>{

  try {
    const {id} = req.params;
    const body = req.body;

    const product = await service.update(id,body);

    res.json({
      message: "product partial updated",
      product
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id",async (req,res,next)=>{

  try {
    const {id} = req.params;

    res.json({
      message:"product deleted",
      body: await service.delete(id)
    });
  } catch (error) {
    next(error);
  }

});


module.exports = router;

