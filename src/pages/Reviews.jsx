function Reviews({ reviews }) {
    return (
        <div>
            <h3>Customer Reviews</h3>
            <ul>
                {reviews.map((r, index) => (
                    <li key={index}>
                        <strong>{r.user}:</strong> {r.comment}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Reviews;
