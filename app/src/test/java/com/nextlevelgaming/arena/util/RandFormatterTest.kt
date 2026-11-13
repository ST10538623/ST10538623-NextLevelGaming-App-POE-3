package com.nextlevelgaming.arena.util

import org.junit.Assert.assertEquals
import org.junit.Test

class RandFormatterTest {
    @Test
    fun formatsAmountsAsSouthAfricanRandWithoutAnExtraSpace() {
        assertEquals("R0", RandFormatter.formatRand(0))
        assertEquals("R750", RandFormatter.formatRand(750))
        assertEquals("R1,500", RandFormatter.formatRand(1500))
        assertEquals("R2,850", RandFormatter.formatRand(2850))
    }
}
