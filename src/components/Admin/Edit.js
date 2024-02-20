import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import db from "../../firebase/firebase";


function Edit() {
    const [codigo, setCodigo] = useState("");
    const [category, setCategory] = useState("");
    const [detail, setDetail] = useState("");
    const [extra1, setExtra1] = useState("");
    const [extra2, setExtra2] = useState("");
    const [extra3, setExtra3] = useState("");
    const [extra4, setExtra4] = useState("");
    const [extra5, setExtra5] = useState("");
    const [extra6, setExtra6] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [imgUrl2, setImgUrl2] = useState("");
    const [imgUrl3, setImgUrl3] = useState("");
    const [imgUrl4, setImgUrl4] = useState("");
    const [imgUrlPdf, setImgUrlPdf] = useState("");
    const [pdf, setPdf] = useState("");
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate()
    const { id } = useParams()
    const [videoUrl, setVideoUrl] = useState("");
    const [ videoUrl2, setVideoUrl2] = useState("");
    const update = async (e) => {
        e.preventDefault()
        const product = doc(db, "products", id)
        const data = {
            codigo: codigo, category: category, detail: detail, extra1: extra1, extra2: extra2, extra3: extra3, extra4: extra4, extra5: extra5, extra6: extra6, imgUrl: imgUrl,
            imgUrl2: imgUrl2, imgUrl3: imgUrl3, imgUrl4: imgUrl4, imgUrlPdf: imgUrlPdf, pdf: pdf, location: location, name: name, price: price, stock: Number(stock),
            videoUrl: videoUrl, videoUrl2: videoUrl2}
        await updateDoc(product, data)
        navigate("/show")
    }

    const getProductById = async (id) => {
        const product = await getDoc(doc(db, "products", id))
        if (product.exists()) {
            setCodigo(product.data().codigo)
            setCategory(product.data().category)
            setDetail(product.data().detail)
            setExtra1(product.data().extra1)
            setExtra2(product.data().extra2)
            setExtra3(product.data().extra3)
            setExtra4(product.data().extra4)
            setExtra5(product.data().extra5)
            setExtra6(product.data().extra6)
            setImgUrl(product.data().imgUrl)
            setImgUrl2(product.data().imgUrl2)
            setImgUrl3(product.data().imgUrl3)
            setImgUrl4(product.data().imgUrl4)
            setImgUrlPdf(product.data().imgUrlPdf)
            setPdf(product.data().pdf)
            setLocation(product.data().location)
            setName(product.data().name)
            setPrice(product.data().price)
            setStock(product.data().stock)
            setVideoUrl(product.data().videoUrl)
            setVideoUrl2(product.data().videoUrl2)
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
                            <label className="form-label">Codigo</label>
                            <input
                                type="text"
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Categoria</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="form-select"
                            >
                                <option value="">Seleccionar categoría</option>
                                <option value="Cosecha">Cosecha</option>
                                <option value="Almacenamiento">Almacenamiento</option>
                                <option value="Silaje">Silaje</option>
                                <option value="Preparación-Distribución">Preparación-Distribución</option>
                                <option value="Henificacion">Henificacion</option>
                                <option value="Repuestos">Repuestos</option>

                            </select>
                        </div>
                        <div className="mb-3">
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
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Imagen</label>
                            <input
                                type="text"
                                value={imgUrl}
                                onChange={(e) => setImgUrl(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Imagen 2</label>
                            <input
                                type="text"
                                value={imgUrl2}
                                onChange={(e) => setImgUrl2(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
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
                        </div>
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