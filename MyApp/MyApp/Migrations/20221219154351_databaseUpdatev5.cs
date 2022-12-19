using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyApp.Migrations
{
    /// <inheritdoc />
    public partial class databaseUpdatev5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Bands_BandId",
                table: "Shows");

            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Halls_HallId",
                table: "Shows");

            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Rooms_RoomId",
                table: "Shows");

            migrationBuilder.RenameColumn(
                name: "RoomId",
                table: "Shows",
                newName: "Roomid");

            migrationBuilder.RenameColumn(
                name: "BandId",
                table: "Shows",
                newName: "Bandid");

            migrationBuilder.RenameColumn(
                name: "HallId",
                table: "Shows",
                newName: "Halldid");

            migrationBuilder.RenameIndex(
                name: "IX_Shows_RoomId",
                table: "Shows",
                newName: "IX_Shows_Roomid");

            migrationBuilder.RenameIndex(
                name: "IX_Shows_BandId",
                table: "Shows",
                newName: "IX_Shows_Bandid");

            migrationBuilder.RenameIndex(
                name: "IX_Shows_HallId",
                table: "Shows",
                newName: "IX_Shows_Halldid");

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Bands_Bandid",
                table: "Shows",
                column: "Bandid",
                principalTable: "Bands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Halls_Halldid",
                table: "Shows",
                column: "Halldid",
                principalTable: "Halls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Rooms_Roomid",
                table: "Shows",
                column: "Roomid",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Bands_Bandid",
                table: "Shows");

            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Halls_Halldid",
                table: "Shows");

            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Rooms_Roomid",
                table: "Shows");

            migrationBuilder.RenameColumn(
                name: "Roomid",
                table: "Shows",
                newName: "RoomId");

            migrationBuilder.RenameColumn(
                name: "Bandid",
                table: "Shows",
                newName: "BandId");

            migrationBuilder.RenameColumn(
                name: "Halldid",
                table: "Shows",
                newName: "HallId");

            migrationBuilder.RenameIndex(
                name: "IX_Shows_Roomid",
                table: "Shows",
                newName: "IX_Shows_RoomId");

            migrationBuilder.RenameIndex(
                name: "IX_Shows_Bandid",
                table: "Shows",
                newName: "IX_Shows_BandId");

            migrationBuilder.RenameIndex(
                name: "IX_Shows_Halldid",
                table: "Shows",
                newName: "IX_Shows_HallId");

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Bands_BandId",
                table: "Shows",
                column: "BandId",
                principalTable: "Bands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Halls_HallId",
                table: "Shows",
                column: "HallId",
                principalTable: "Halls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Rooms_RoomId",
                table: "Shows",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
