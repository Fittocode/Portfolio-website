export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: .25
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 1,
        },
    }
}