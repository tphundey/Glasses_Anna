

const Listdanhmuc = () => {
    // Dữ liệu mẫu về kính
    const categoryData = [
        {
            id: 1,
            category: 'Kính nhựa',

        },
        {
            id: 2,
            category: 'Kính kim loại',

        },
        // Thêm các dữ liệu khác nếu cần
    ];

    return (
        <div className="listproduct">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Loại kính</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categoryData.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.category}</td>
                            <td>Xóa</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listdanhmuc