import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import db from "../../firebase/firebase"

const Create = () => {
    const [codigo, setCodigo] = useState("");
    const [name, setName] = useState("");
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
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate()
    const [videoUrl, setVideoUrl] = useState("");
    const [videoUrl2, setVideoUrl2] = useState("");
    const productsCollection = collection(db, "products")

    const store = async (e) => {
        e.preventDefault()
        await addDoc(productsCollection, {
            codigo: codigo, category: category, detail: detail, extra1: extra1, extra2: extra2, extra3: extra3, extra4: extra4, extra5: extra5, extra6: extra6, imgUrl: imgUrl,
            imgUrl2: imgUrl2, imgUrl3: imgUrl3, imgUrl4: imgUrl4, imgUrlPdf: imgUrlPdf,
            location: location, name: name, price: price, stock: stock, pdf: pdf, videoUrl: videoUrl,
            videoUrl2: videoUrl2})
        navigate("/show")
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Crear Producto</h1>

                    <form onSubmit={store}>
                        <div className="mb-3">
                            <label className="form-label">Codigo</label>
                            <input
                                type="text"
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                placeholder="Codigo del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nombre del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Detalle</label>
                            <input
                                type="text"
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                                placeholder="Detalle del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 1</label>
                            <input
                                type="text"
                                value={extra1}
                                onChange={(e) => setExtra1(e.target.value)}
                                placeholder="Extra 1 del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 2</label>
                            <input
                                type="text"
                                value={extra2}
                                onChange={(e) => setExtra2(e.target.value)}
                                placeholder="Extra 2 del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 3</label>
                            <input
                                type="text"
                                value={extra3}
                                onChange={(e) => setExtra3(e.target.value)}
                                placeholder="Extra 3 del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 4</label>
                            <input
                                type="text"
                                value={extra4}
                                onChange={(e) => setExtra4(e.target.value)}
                                placeholder="Extra 4 del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 5</label>
                            <input
                                type="text"
                                value={extra5}
                                onChange={(e) => setExtra5(e.target.value)}
                                placeholder="Extra 5 del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Extra 6</label>
                            <input
                                type="text"
                                value={extra6}
                                onChange={(e) => setExtra6(e.target.value)}
                                placeholder="Extra 6 del producto"
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
                            <label className="form-label">Url de Imagen</label>
                            <input
                                type="text"
                                value={imgUrl}
                                onChange={(e) => setImgUrl(e.target.value)}
                                placeholder="Imagen del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Imagen 2</label>
                            <input
                                type="text"
                                value={imgUrl2}
                                onChange={(e) => setImgUrl2(e.target.value)}
                                placeholder="Imagen del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Imagen 3</label>
                            <input
                                type="text"
                                value={imgUrl3}
                                onChange={(e) => setImgUrl3(e.target.value)}
                                placeholder="Imagen del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Imagen 4</label>
                            <input
                                type="text"
                                value={imgUrl4}
                                onChange={(e) => setImgUrl4(e.target.value)}
                                placeholder="Imagen del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Imagen Pdf</label>
                            <input
                                type="text"
                                value={imgUrlPdf}
                                onChange={(e) => setImgUrlPdf(e.target.value)}
                                placeholder="Imagen del Pdf"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pdf</label>
                            <input
                                type="text"
                                value={pdf}
                                onChange={(e) => setPdf(e.target.value)}
                                placeholder="PDF del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Video</label>
                            <input
                                type="text"
                                value={videoUrl}
                                onChange={(e) => setVideoUrl(e.target.value)}
                                placeholder="url de Video 1"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de Video 2</label>
                            <input
                                type="text"
                                value={videoUrl2}
                                onChange={(e) => setVideoUrl2(e.target.value)}
                                placeholder="url de Video 2"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ubicacion</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Ubicacion del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Stock</label>
                            <input
                                type="text"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                placeholder="Stock del producto"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Precio del producto"
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create