import React from 'react';

function Pagination({ total, currentPage, onPageChange }) {
    const totalPages = Math.ceil(total / 10); // Assuming 10 items per page

    return (
        <div>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
