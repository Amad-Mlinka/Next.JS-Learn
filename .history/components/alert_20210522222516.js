import React from 'react'

export default alert = (children, type) => {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            {children}
        </div>
    )
}
