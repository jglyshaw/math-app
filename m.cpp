#include <iostream>
#include <iomanip>
#include <mpi.h>

using namespace std;

int main(int argc, char **argv)
{

    const int N = 4;
    int A[N][N];
    int B[N][N];
    int C[N][N];

    // init matrices
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            A[i][j] = N * i + j;
            B[i][j] = N * i + j;
        }
    }

    double startTime = MPI_Wtime();

    // multiply
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            C[i][j] = 0;

            for (int k = 0; k < N; k++)
            {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    double endTime = MPI_Wtime();

    // print result
    cout << "N = " << N << endl;
    cout << "time = " << endTime - startTime;
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            cout << C[i][j] << " ";
        }
        cout << endl;
    }
}