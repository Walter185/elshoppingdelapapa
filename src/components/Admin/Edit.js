import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import db from "../../firebase/firebase";


function Edit() {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate()
    const { id } = useParams()
    const update = async (e) => {
        e.preventDefault()
        const product = doc(db, "products", id)
        const data = {
            title: title, category: category, description: description, img1: img1,
            img2: img2, price: price}
        await updateDoc(product, data)
        navigate("/show")
    }

    const getProductById = async (id) => {
        const product = await getDoc(doc(db, "products", id))
        if (product.exists()) {
            setTitle(product.data().title)
            setCategory(product.data().category)
            setDescription(product.data().description)
            setImg1(product.data().img1)
            setImg2(product.data().img2)
            setPrice(product.data().price)
        }
        else {
            console.log("El producto no existe")
        }
    }

    useEffect(() => {
        getProductById(id)
    }, [])


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Editar Producto</h1>

                    <form onSubmit={update}>
                        <div className="mb-3">
                            <label className="form-label">Titulo</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descripcion</label>
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Categoria</label>
                            <input
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        {/* <div className="mb-3">
                            <label className="form-label">Detalle</label>
                            <input
                                type="text"
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 1</label>
                            <input
                                type="text"
                                value={extra1}
                                onChange={(e) => setExtra1(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 2</label>
                            <input
                                type="text"
                                value={extra2}
                                onChange={(e) => setExtra2(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 3</label>
                            <input
                                type="text"
                                value={extra3}
                                onChange={(e) => setExtra3(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 4</label>
                            <input
                                type="text"
                                value={extra4}
                                onChange={(e) => setExtra4(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 5</label>
                            <input
                                type="text"
                                value={extra5}
                                onChange={(e) => setExtra5(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 6</label>
                            <input
                                type="text"
                                value={extra6}
                                onChange={(e) => setExtra6(e.target.value)}
                                className="form-control"
                            />
                        </div> */}
                        <div className="mb-3">
                            <label className="form-label">Url de Imagen</label>
                            <input
                                type="text"
                                value={img1}
                                onChange={(e) => setImg1(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Imagen 2</label>
                            <input
                                type="text"
                                value={img2}
                                onChange={(e) => setImg2(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        {/* <div className="mb-3">
                            <label className="form-label">Url de Imagen 3</label>
                            <input
                                type="text"
                                value={imgUrl3}
                                onChange={(e) => setImgUrl3(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Imagen 4</label>
                            <input
                                type="text"
                                value={imgUrl4}
                                onChange={(e) => setImgUrl4(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Imagen Pdf</label>
                            <input
                                type="text"
                                value={imgUrlPdf}
                                onChange={(e) => setImgUrlPdf(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pdf</label>
                            <input
                                type="text"
                                value={pdf}
                                onChange={(e) => setPdf(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Video</label>
                            <input
                                type="text"
                                value={videoUrl}
                                onChange={(e) => setVideoUrl(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Video 2</label>
                            <input
                                type="text"
                                value={videoUrl2}
                                onChange={(e) => setVideoUrl2(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ubicacion</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Stock</label>
                            <input
                                type="number"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                className="form-control"
                            />
                        </div> */}
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Actualizar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit