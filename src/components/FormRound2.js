
export default function FormRound2({className,children,handleSubmit}){
    return (
        <form className={className} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}