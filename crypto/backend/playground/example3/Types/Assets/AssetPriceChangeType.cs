using HotChocolate.Resolvers;
using System.Text.Json;

namespace Demo.Types.Assets;

public sealed class AssetPriceChangeType : ObjectType
{
    protected override void Configure(IObjectTypeDescriptor descriptor)
    {
        descriptor
          .Name("AssetPriceChange")
          .IsOfType(IsAssetPriceChangeType);

        descriptor
          .Field("percentageChange")
          .Type<NonNullType<FloatType>>()
          .FromJson();
    }

    private static bool IsAssetPriceChangeType(IResolverContext context, object resolverResult)
      => resolverResult is JsonElement element &&
         element.TryGetProperty("percentageChange", out _);
}