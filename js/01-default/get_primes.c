#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

#define MAX_NUM 200000
#define MAX_PRIMES 200000
#define MAX_LEN 5000000

int is_prime(int n)
{
    if (n <= 1)
        return 0;
    for (int i = 2; i <= sqrt(n); i++)
    {
        if (n % i == 0)
            return 0;
    }
    return 1;
}

char *get_primes()
{
    char *primes_str = malloc(MAX_LEN);
    strcpy(primes_str, "");

    for (int i = 0; i <= MAX_NUM; i++)
    {
        if (is_prime(i))
        {
            char str[10];
            sprintf(str, "%d,", i);
            strcat(primes_str, str);
        }
    }

    int len = strlen(primes_str);
    if (len > 0)
        primes_str[len - 1] = '\0';

    return primes_str;
}

int main()
{
    char *primes = get_primes();
    printf("Lista de números primos de 0 a %d: %s\n", MAX_NUM, primes);
    free(primes);
    return 0;
}
