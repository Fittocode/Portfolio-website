export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 0,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .8,
            when: 'beforeChildren',
            staggerChildren: .25
        },
    },
    exit: {
        opacity: 0,
        y: 0,
        transition: {
            delay: .7,
            duration: .8,
        },
    }
}