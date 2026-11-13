package com.nextlevelgaming.arena.util

import java.util.Locale

object RandFormatter {
    fun formatRand(amount: Int): String = String.format(Locale.US, "R%,d", amount)
}
