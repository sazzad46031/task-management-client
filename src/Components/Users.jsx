

const Users = () => {
    return (
        <div className="bg-gradient-to-r from-red-500 to-purple-500 text-center text-white pt-14  pb-14">
            <div className="mb-10">
                <h2 className="text-3xl mb-4">Type of people are using this website</h2>
                <ul className="text-xl">
                    <li>Web developer</li>
                    <li>Graphic designer</li>
                    <li>Banker</li>
                </ul>
            </div>
            <div>
                <h2 className="text-3xl mb-4">To whom this can be of benefit</h2>
                <ul className="text-xl">
                    <li>Seo expert</li>
                    <li>physicist</li>
                    <li>Chemist</li>
                    <li>Mathematician</li>
                </ul>
            </div>
        </div>
    );
};

export default Users;