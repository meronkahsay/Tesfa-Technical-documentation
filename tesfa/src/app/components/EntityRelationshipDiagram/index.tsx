export default function EntityRelationship() {

    return (
        <main className="mt-50 lg:px-40 px-5 ">
            <div>
                <h1 className="text-[#003333] font-bold md:text-6xl text-4xl">
                    Entity Relationship Diagram
                </h1>
                <p className="text-[#003333] md:text-2xl mt-15">
                    This Entity Relationship Diagram (ERD) provides a structured blueprint for how data is organized, stored, and interlinked across the platform, enabling robust health and environmental risk assessment in post-conflict regions. The ERD is foundational to the Tesfa’s technical architecture, ensuring that all components—from AI agents to dashboards—can seamlessly interact with reliable, traceable data.
                </p>
            </div>
            <div className="mt-30  flex justify-center items-center ">
                <img src={"/Images/ERD.png"}></img>
            </div>
        </main>
    )
}