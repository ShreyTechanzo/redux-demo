import { useState } from "react";

export function useHeader() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    function handleDialogOpen() {
        setIsDialogOpen(true);
    }

    function handleDialogClose() {
        setIsDialogOpen(false);
    }

    return { isDialogOpen, handleDialogOpen, handleDialogClose };
}