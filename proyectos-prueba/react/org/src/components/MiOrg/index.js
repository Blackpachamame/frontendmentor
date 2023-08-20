import "./MiOrg.css";

const MiOrg = (props) => {
    //Estado - hooks
    //userState

    return <section className="orgSection">
        <h2>Mi organización</h2>
        <img className="imgAdd" src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg